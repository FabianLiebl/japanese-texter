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
}
