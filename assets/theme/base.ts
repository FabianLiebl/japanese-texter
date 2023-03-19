import './styles/base.scss';
import * as $ from 'jquery';
import Application from "./javascript/Application";
import Training from "./javascript/Training";
import TrainingLetters from "./javascript/TrainingLetters";

if ($('[data-training]').length > 0) {
    new Training();
} else if ($('[data-training-letters]').length > 0) {
    new TrainingLetters();
} else {
    new Application();
}
