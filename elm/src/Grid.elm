module Grid exposing (main)

import Html exposing (text)
import List exposing (length)
import Maybe

myLast : List a -> Maybe a
-- your implementation goes here
myLast list =
   case list of
        [] -> Nothing
        head :: [] -> Nothing
        --looks for list with the pattern below
        head1 :: head2 :: [] -> Just head1
        head :: tail ->  myLast tail


main =
  case myLast [1,2,3,4,55] of
    Just a -> text (Debug.toString a)
    Nothing -> text "No element found"