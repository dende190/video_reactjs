import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
	<div className="App">
		<Header />
		<Search />
		<Categories title="test1">
			<Carousel>
				<CarouselItem />
				<CarouselItem />
				<CarouselItem />
			</Carousel>
		</Categories>
		<Categories title="test2">
			<Carousel>
				<CarouselItem />
				<CarouselItem />
			</Carousel>
		</Categories>
		<Categories title="test3">
			<Carousel>
				<CarouselItem />
			</Carousel>
		</Categories>
		<Footer />
	</div>
);

export default App