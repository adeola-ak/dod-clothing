import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51Hvc2XAOzHmZJW0I7d6GwKwGzTpP0clV2JiNIv1McvOMW4qxEzqv9Q3MPmW4rWnanrxA0bdfS1GfiUK2Rh84H70Z00E8Il0LZe";

	const onToken = (token) => {
		console.log(token);
		alert("Success");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="dod"
			billingAddress
			shippingAddress
			image="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/drop-of-blood_1fa78.png"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="pay now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
