import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import RatingStars from "./components/RatingStars";
import ShoppingCart from "./components/ShoppingCart";

const products = [
	{
		id: 1,
		name: "Shiny Stylish Clutch",
		rating: 4.8,
		description:
			"A very special evening clutch with gold bow design clasp details. Made from luxury champagne gold sparkle.",
		price: 61.21,
		image: require("./assets/images/product-1.jpg"),
	},
	{
		id: 2,
		name: "Pearl Clutch Bag",
		rating: 4.2,
		description:
			"Pearl clutch Bag, Pearl evening bag, Bridal clutch with pearls, Beaded pearl clutch, Ivory pearl purse.",
		price: 55.91,
		image: require("./assets/images/product-2.jpg"),
	},
	{
		id: 3,
		name: "Lavender Classic Puffy Bag",
		rating: 3.9,
		description:
			"Lavender shoulder bag casual trendy fancy fashionable hobo shoulder daytrip slingbag for women",
		price: 43.50,
		image: require("./assets/images/product-3.jpg"),
	},
	{
		id: 4,
		name: "Mini Chain Box Bag",
		rating: 4.8,
		description:
			"Fashion gold diamond, Evening bags luxury handbag, Elegent chain bag, Wedding party clutch bags pouch.",
		price: 75,
		image: require("./assets/images/product-4.jpg"),
	},
	{
		id: 5,
		name: "Butterfly Decor Flap Square Bag",
		rating: 4.5,
		description:
			"Fasionable Collar PU Leather Chevron Square Bag Embellished Women Bags.",
		price: 65.6,
		image: require("./assets/images/product-5.jpg"),
	},
	{
		id: 6,
		name: "Chloe Hand Bag",
		rating: 3.8,
		description:
			"Shoulder bags for women, PU leather handbag fashion top handle bag shoulder purse with chain strap.",
		price: 75.89,
		image: require("./assets/images/product-6.jpg"),
	},
	{
		id: 7,
		name: "Leather Crossbody Bag",
		rating: 4.2,
		description:
			"Two short metallic handles, One main compartment secured with a magnetic button closure",
		price: 99,
		image: require("./assets/images/product-7.jpg"),
	},
	{
		id: 8,
		name: "Structured Satchel With Buckle",
		rating: 4.8,
		description:
			"Organize your essentials effortlessly with spacious compartments and smartly placed pockets that accommodate your daily necessities.",
		price: 119,
		image: require("./assets/images/product-8.jpg"),
	},
];

function App() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productsInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state variable

	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productsInCart)
		);
	}, [productsInCart]);
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (product) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === product.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				products={productsInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar">
				<h3 className="logo">Blooms Velv...</h3>
				<input
					type="text"
					placeholder="Search products..."
					value={searchQuery}
					onChange={(e) =>
						setSearchQuery(e.target.value)
					}
				/>

				<button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productsInCart.length >
						0 && (
						<span className="product-count">
							{
								productsInCart.length
							}
						</span>
					)}
				</button>
			</div>
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							<RatingStars
								rating={
									product.rating
								}
							/>
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
