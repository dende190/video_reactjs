import React, { useState, useEffect, Fragment } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:9090/initialState';

const Home = () => {
	const initialState = useInitialState(API);

	return(
		<Fragment>
			<Search />
			{
				initialState.mylist.length > 0 &&
					<Categories title="Mi Lista">
						<Carousel>
							{
								initialState.mylist.map( item => 
									<CarouselItem key={ item.id } { ...item } />
								)
							}
						</Carousel>
					</Categories>
			}
			<Categories title="Tendencias">
				<Carousel>
					{
						initialState.trends.map( item => 
							<CarouselItem key={ item.id } { ...item } />
						)
					}
				</Carousel>
			</Categories>

			<Categories title="Originales">
				<Carousel>
					{
						initialState.originals.map( item => 
							<CarouselItem key={ item.id } { ...item } />
						)
					}
				</Carousel>
			</Categories>
		</Fragment>
	);
}

export default Home;