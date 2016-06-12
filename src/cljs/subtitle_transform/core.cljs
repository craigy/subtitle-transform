(ns subtitle-transform.core
  (:require
    [reagent.core :as r]
    [clojure.string :as string]
    [instaparse.core :as insta]))

(enable-console-print!)

(def ini
  (insta/parser
    "<S> = tagged*
     tagged = tag line*
     tag = '['content']'
     line = '\n' content
     <content> = #'[^\\[\\]]*'"))

(defonce app-state
  (r/atom
    {:input ""
     :output nil}))

(defn in->out [input]
  (let [parsed (ini input)]
    (if (and (not (insta/failure? parsed)) (seq parsed))
      parsed
      (print-str (insta/get-failure parsed)))))

(defn on-change-input [event]
  (let [input (.-value (.-target event))]
    (swap! app-state assoc :input input)
    (swap! app-state assoc :output (in->out input))))

(defn out-trans [out]
  (map
    (fn [[tagged & contents]]
      (map
        (fn [[tag-or-line & body]]
          (case tag-or-line
            :tag (str "[" (apply str body) "]")
            :line (apply str body)))
        contents))
    out))

(def ta-style
  {:width 400
   :height 200
   :resize "none"
   :font-family "monospace"})

(defn app []
  [:div {:style {:margin-left 16}}
   [:textarea
    {:style ta-style
     :value (:input @app-state)
     :on-change on-change-input}]
   [:textarea
    {:style ta-style
     :disabled true
     :value (str (:output @app-state))}]
   [:textarea
    {:style ta-style
     :disabled true
     :value (out-trans (:output @app-state))}]])

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

