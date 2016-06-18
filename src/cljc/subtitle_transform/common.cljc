(ns subtitle-transform.common
  (:require [instaparse.core :as insta]))

(def ini
  (insta/parser
    "<S> = tagged*
     tagged = tag '\n' line*
     tag = '[' nonclose+ ']'
     line = nonclose #'[^\n]*' nonbracket*
     <nonclose> = #'[^\n\\[\\]]'
     <nonbracket> = #'[^\\[\\]]'
     <whitespace> = #'\\s*'"))

