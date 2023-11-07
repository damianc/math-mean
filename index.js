(function () {
	const mean = {
		arithmetic(
			nums, weights = null
		) {
			weights = getWeights(
				weights, nums.length
			);
			const acc = sum(
				nums, (x,i) => x * weights[i]
			);
			const n = sum(weights);
			return acc / n;
		},
		
		geometric(
			nums, weights = null
		) {
			weights = getWeights(
				weights, nums.length
			);
			const acc = prod(
				nums, (x,i) => x**weights[i]
			);
			const n = sum(weights);
			return acc**(1/n);
		},
		
		harmonic(
			nums, weights = null
		) {
			weights = getWeights(
				weights, nums.length
			);
			const acc = sum(
				nums, (x,i) => weights[i] / x
			);
			const n = sum(weights);
			return n / acc;
		},
		
		power(
			nums, weights = null, p
		) {
			weights = getWeights(
				weights, nums.length
			);
			const acc = sum(
				nums, (x,i) => weights[i] * (x**p)
			);
			const n = sum(weights);
			return (acc / n)**(1/p);
		},
		
		quadratic(
			nums, weights = null
		) {
			return mean.power(
				nums, weights, 2
			);
		},
		
		root(
			nums, weights = null, d = 2
		) {
		 return mean.power(
		 	nums, weights, 1/d
		 );
		},
		
		logarithmic(
			nums, weights = null, b = Math.E
		) {
			weights = getWeights(
				weights, nums.length
			);
			const acc = sum(
				nums, (x,i) => {
					return weights[i] * (
						Math.log(x) / Math.log(b)
					);
				}
			);
			const n = sum(weights);
			return Math.exp(acc / n);
		}
	};
	
	Math.mean = mean;
	
	function sum(arr, mapper = x => x) {
		return arr.reduce((acc,curr,idx) => {
			const currValue = mapper(curr,idx);
			return acc + currValue;
		},0);
	}
	
	function prod(arr, mapper = x => x) {
		return arr.reduce((acc,curr,idx) => {
			const currValue = mapper(curr,idx);
			return acc * currValue;
		},1);
 }
		
	function getWeights(w, n) {
		if (w === null) {
		 return (new Array(n)).fill(1);
		} else {
			return w;
		}
	}
})()
