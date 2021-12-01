const set = (key, value) => {
	try {
		localStorage.setItem(key, JSON.stringify(value));
	} catch (error) {}
};
const get = (key) => {
	try {
		return JSON.parse(localStorage.getItem(key));
	} catch (error) {}
};

const localStorageHelper = { get, set };

export default localStorageHelper;
