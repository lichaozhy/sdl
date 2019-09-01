import dateFormat from 'dateformat';

export default function format(time) {
	if (!time) {
		return '-------------';
	}

	return dateFormat(time, 'yyyy/mm/dd');
}