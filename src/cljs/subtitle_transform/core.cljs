(ns subtitle-transform.core
  (:require
    [reagent.core :as r]
    [clojure.string :as string]
    [instaparse.core :as insta]))

(enable-console-print!)

(def as-and-bs
  (insta/parser
    "S = AB*
     AB = A B
     A = 'a'+
     B = 'b'+"))

(defonce app-state
  (r/atom
    {:input ""
     :output ""}))

(defn in->out [input]
  (let [parsed (as-and-bs input)]
    (if (and (not (insta/failure? parsed)) (seq parsed))
      (str parsed)
      (print-str (insta/get-failure parsed)))))

(defn on-change-input [event]
  (let [input (.-value (.-target event))]
    (swap! app-state assoc :input input)
    (swap! app-state assoc :output (in->out input))))

(defn app []
  [:div {:style {:margin-left 16}}
   [:textarea
    {:style {:width 400
             :height 200
             :resize "none"
             :font-family "monospace"}
     :value (:input @app-state)
     :on-change on-change-input}]
   [:textarea
    {:style {:width 400
             :height 200
             :resize "none"
             :font-family "monospace"}
     :disabled true
     :value (:output @app-state)}]])

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

