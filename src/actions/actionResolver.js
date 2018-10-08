const actionResolve = (type, payload) => {
	return {
		type: type,
		payload
	};
};

module.exports = actionResolve;
