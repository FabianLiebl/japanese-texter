import './styles/base.scss';
import * as $ from 'jquery';
import Application from "./javascript/Application";
import Training from "./javascript/Training";

if ($('[data-training]').length > 0) {
    new Training();
} else {
    new Application();
}
