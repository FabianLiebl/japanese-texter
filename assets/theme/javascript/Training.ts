import * as $ from 'jquery';
import axios from 'axios';

export default class Training
{
    private $currentSheet: JQuery;
    private currentIndex: number;
    private currentLetterId: number;

    private solved: boolean;
    private numCorrect: number = 0;
    private numWrong: number = 0;

    public constructor()
    {
        this.currentIndex = -1;
        this.nextSheet();

        $('[data-choice]').on('click', (event) => {
            this.choiceClick($(event.target));
        });
        $('[data-next-sheet]').on('click', () => {
            this.nextSheet();
        });
        $('[data-change-score]').on('click', (event) => {
            this.changeScore($(event.target));
        });
    }

    private choiceClick($target: JQuery)
    {
        if (!this.solved) {
            this.solved = true;
            let correct = $target.data('choice') == 'correct';
            let chosenLetterId = $target.data('letter-id');
            this.$currentSheet.addClass('solved');
            if (correct) {
                this.$currentSheet.addClass('correct');
                this.numCorrect++;
            } else {
                this.numWrong++;
            }
            this.sendResult(this.currentLetterId, correct, chosenLetterId);
        }
    }

    private nextSheet()
    {
        $('[data-sheet]').removeClass('active');

        this.currentIndex++;
        this.$currentSheet = $('[data-sheet="' + this.currentIndex + '"]');
        this.solved = false;

        if (this.$currentSheet.length > 0) {
            this.$currentSheet.addClass('active');
            this.currentLetterId = this.$currentSheet.data('letter');
        } else {
            location.reload();
            // $('[data-result-message]').html('Finished, ' + this.numCorrect + ' correct and ' + this.numWrong + ' errors.');
            // $('[data-sheet="result"]').addClass('active');
        }
    }

    private sendResult(letterId: number, correct: boolean, chosenLetterId: string)
    {
        let url = '/training/adjust-letter-score/' + letterId + '/';
        if (correct) {
            url += '1';
        } else {
            url += '0';
        }
        axios.get(url);
        if (!correct) {
            let url = '/training/adjust-letter-score/' + chosenLetterId + '/0';
            axios.get(url);
        }
    }

    private changeScore($target: JQuery)
    {
        if ($target.hasClass('clicked')) {
            return;
        }
        $target.addClass('clicked');
        let url = $target.data('change-score');
        axios.get(url);
    }
}
