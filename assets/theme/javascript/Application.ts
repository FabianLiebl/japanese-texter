import * as $ from 'jquery';

export default class Application
{
    private readonly $filterArea: JQuery;
    private readonly $letterArea: JQuery;
    private readonly $dataOutputField: JQuery;

    private $currentlyDragged: JQuery = null;

    private textFieldCursorPosition: number = 0;

    public constructor()
    {
        this.$filterArea = $('[data-filter-area]');
        this.$letterArea = $('[data-letter-area]');
        this.$dataOutputField = $('[data-output-field]');

        this.initFavoriteTags();
        this.initFavoriteLetters();
        this.initLetterClick();
        this.initFilter();
    }

    private initFavoriteTags()
    {
        let self = this;
        this.$filterArea.find('[data-favorite-tags]').find('[data-tag]').data('favorite', 1);
        this.$filterArea.find('[data-tags]').find('[data-tag]').data('favorite', 0);

        this.$filterArea.find('[data-tag]').on('dragstart', function () {
            if ($(this).data('favorite') == 1) {
                self.$filterArea.addClass('dragging-favorite-tag');
            } else {
                self.$filterArea.addClass('dragging-tag');
            }
            self.$currentlyDragged = $(this);
        });

        let $favoriteTags = this.$filterArea.find('[data-favorite-tags]');
        $favoriteTags.on('dragover', function(event) {
            event.preventDefault();
            return true;
        });
        $favoriteTags.on('drop dragdrop', (event) => {
            if (self.$currentlyDragged == null) {
                return;
            }
            if (!self.$currentlyDragged.data('tag')) {
                return;
            }
            if (self.$currentlyDragged.data('favorite') == 0) {
                this.$currentlyDragged.appendTo($favoriteTags);
                this.$currentlyDragged.data('favorite', 1);
                $.ajax({
                    url: '/tag/favorite/' + this.$currentlyDragged.data('tag')
                });
            }
            this.$currentlyDragged = null;
        });

        let $normalTags = this.$filterArea.find('[data-tags]');
        $normalTags.on('dragover', function(event) {
            event.preventDefault();
            return true;
        });
        $normalTags.on('drop dragdrop', (event) => {
            if (self.$currentlyDragged == null) {
                return;
            }
            if (!self.$currentlyDragged.data('tag')) {
                return;
            }
            if (self.$currentlyDragged.data('favorite') == 1) {
                this.$currentlyDragged.appendTo($normalTags);
                this.$currentlyDragged.data('favorite', 0);
                $.ajax({
                    url: '/tag/unfavorite/' + this.$currentlyDragged.data('tag')
                });
            }
            this.$currentlyDragged = null;
        });

        $(document).on('dragend', () => {
            this.$filterArea.removeClass('dragging-favorite-tag').removeClass('dragging-tag');
            this.$currentlyDragged = null;
        });
    }

    private initFavoriteLetters()
    {
        let self = this;
        this.$letterArea.find('[data-favorite-letters]').find('[data-letter]').data('favorite', 1);
        this.$letterArea.find('[data-letters]').find('[data-letter]').data('favorite', 0);

        this.$letterArea.find('[data-letter]').on('dragstart', function () {
            if ($(this).data('favorite') == 1) {
                self.$letterArea.addClass('dragging-favorite-letter');
            } else {
                self.$letterArea.addClass('dragging-letter');
            }
            self.$currentlyDragged = $(this);
        });

        let $favoriteLetters = this.$letterArea.find('[data-favorite-letters]');
        $favoriteLetters.on('dragover', function(event) {
            event.preventDefault();
            return true;
        });
        $favoriteLetters.on('drop dragdrop', (event) => {
            if (self.$currentlyDragged == null) {
                return;
            }
            if (!self.$currentlyDragged.data('letter')) {
                return;
            }
            if (self.$currentlyDragged.data('favorite') == 0) {
                this.$currentlyDragged.appendTo($favoriteLetters);
                this.$currentlyDragged.data('favorite', 1);
                $.ajax({
                    url: '/letter/favorite/' + this.$currentlyDragged.data('letter')
                });
            }
            this.$currentlyDragged = null;
        });

        let $normalLetters = this.$letterArea.find('[data-letters]');
        $normalLetters.on('dragover', function(event) {
            event.preventDefault();
            return true;
        });
        $normalLetters.on('drop dragdrop', (event) => {
            if (self.$currentlyDragged == null) {
                return;
            }
            if (!self.$currentlyDragged.data('letter')) {
                return;
            }
            if (self.$currentlyDragged.data('favorite') == 1) {
                this.$currentlyDragged.appendTo($normalLetters);
                this.$currentlyDragged.data('favorite', 0);
                $.ajax({
                    url: '/letter/unfavorite/' + this.$currentlyDragged.data('letter')
                });
            }
            this.$currentlyDragged = null;
        });

        $(document).on('dragend', () => {
            this.$letterArea.removeClass('dragging-favorite-letter').removeClass('dragging-letter');
            this.$currentlyDragged = null;
        });
    }

    private initLetterClick()
    {
        let self = this;

        self.$dataOutputField.on('click keyup', () => {
            this.textFieldCursorPosition = self.$dataOutputField.prop('selectionStart');
            console.log(this.textFieldCursorPosition);
        });

        this.$letterArea.find('[data-letter]').on('click', function () {
            let currentText = <string> self.$dataOutputField.val();
            let newText =
                currentText.substring(0, self.textFieldCursorPosition)
                + $(this).find('[data-letter-symbol]').html()
                + currentText.substring(self.textFieldCursorPosition, currentText.length);

            self.$dataOutputField.val(newText);
            self.textFieldCursorPosition++;
            self.$dataOutputField.prop('selectionStart', self.textFieldCursorPosition);
            self.$dataOutputField.prop('selectionEnd', self.textFieldCursorPosition);
            self.$dataOutputField.trigger('focus');
        });
    }

    private initFilter()
    {
        let self = this;
        // this.$filterArea.find('[data-tag]').on('click', function () {
        //     $(this).toggleClass('active');
        //     self.updateFilters();
        // });
        this.$filterArea.find('[data-tag]').on('mouseup', function (event) {
            switch (event.button) {
                case 0:
                    $(this).removeClass('not');
                    $(this).toggleClass('active');
                    break;
                case 1:
                    $(this).removeClass('active');
                    $(this).toggleClass('not');
                    break;
            }
            self.updateFilters();
        });
    }

    private updateFilters()
    {
        let activeFilterOrGroups: OrGroup[] = [];
        let activeFiltersWithoutOrGroup: number[] = [];
        let activeNotFilters: number[] = [];

        this.$filterArea.find('[data-tag].active').each(function () {
            let orGroupName = $(this).data('or-group');
            if (orGroupName) {
                for(let orGroup of activeFilterOrGroups) {
                    if (orGroup.name == orGroupName) {
                        orGroup.filters.push($(this).data('tag'));
                        return;
                    }
                }
                let newOrGroup = new OrGroup(orGroupName);
                newOrGroup.filters.push($(this).data('tag'));
                activeFilterOrGroups.push(newOrGroup);
            } else {
                activeFiltersWithoutOrGroup.push($(this).data('tag'));
            }
        });
        this.$filterArea.find('[data-tag].not').each(function () {
            activeNotFilters.push($(this).data('tag'));
        });

        this.$letterArea.find('[data-letter]').each(function () {
            let ownTags = <object> $(this).data('tags');
            for(let filter of activeNotFilters) {
                if (ownTags.hasOwnProperty(filter)) {
                    $(this).addClass('filtered-out');
                    return;
                }
            }
            for(let filter of activeFiltersWithoutOrGroup) {
                if (!ownTags.hasOwnProperty(filter)) {
                    $(this).addClass('filtered-out');
                    return;
                }
            }
            for(let orGroup of activeFilterOrGroups) {
                let hasOne = false;
                for(let filter of orGroup.filters) {
                    if (ownTags.hasOwnProperty(filter)) {
                        hasOne = true;
                        break;
                    }
                }
                if (!hasOne) {
                    $(this).addClass('filtered-out');
                    return;
                }
            }
            $(this).removeClass('filtered-out');
        });
    }
}

class OrGroup {
    name: string;
    filters: number[];

    constructor(name: string) {
        this.name = name;
        this.filters = [];
    }
}
