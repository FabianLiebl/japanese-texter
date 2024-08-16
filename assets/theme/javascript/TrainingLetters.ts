import * as $ from 'jquery';
import axios from 'axios';

export default class TrainingLetters
{
    public constructor()
    {
        $('[data-change-score]').on('click', (event) => {
            event.preventDefault();
            this.changeLetterScore($(event.target));
        });
        $('[data-toggle-active]').on('click', (event) => {
            event.preventDefault();
            this.toggleLetterActive($(event.target));
        });
        $('[data-switch-mode]').on('click', (event) => {
            event.preventDefault();
            if ($(event.target).data('switch-mode') == 'active') {
                $('[data-training-letters]').addClass('mode-active');
            } else {
                $('[data-training-letters]').removeClass('mode-active');
            }
        });
    }

    private changeLetterScore($target: JQuery)
    {
        let url = $target.prop('href');
        let $letter = $target.closest('[data-letter]');
        axios.get(url)
            .then((response) => {
                if (response.data.success) {
                    $letter
                        .removeClass('good')
                        .removeClass('mid')
                        .removeClass('bad')
                        .addClass(response.data.scoreClass)
                    ;
                    $letter.find('[data-score]').html(response.data.score);
                }
            });
    }

    private toggleLetterActive($target: JQuery)
    {
        let url = $target.prop('href');
        let $letter = $target.closest('[data-letter]');
        axios.get(url)
            .then((response) => {
                if (response.data.success) {
                    if (response.data.letterActive) {
                        $letter.removeClass('inactive');
                    } else {
                        $letter.addClass('inactive');
                    }
                }
            });
    }
}
