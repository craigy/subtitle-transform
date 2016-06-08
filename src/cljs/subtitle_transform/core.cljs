(ns subtitle-transform.core
  (:require
    [reagent.core :as r]
    [clojure.string :as string]))

(enable-console-print!)

(defonce app-state
  (r/atom
    {:input ""
     :output ""}))

(defn app []
  [:div {:style {:margin-left 16}}])

(defn ^:export run[]
  (r/render
    [app]
    (js/document.getElementById "app")))

(run)

