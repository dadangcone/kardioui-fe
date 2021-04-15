import Vue from 'vue';
import moment from 'moment';

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
    }
});

Vue.filter('formatDateSlash', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
    }
});

Vue.filter('formatDay', function(value) {
    if (value) {
        return moment(String(value)).format('DD MMMM')
    }
});

Vue.filter('formatMonth', function(value) {
    if (value) {
        return moment(String(value)).format('MMM')
    }
});