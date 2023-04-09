import React, { useContext } from 'react';
import { DataContext } from '../../../context/DataProvider';
import './Filter.css'

const options = [
	{ label: 'All', value: 'All' },
	{ label: 'Music', value: 'Music' },
	{ label: 'Movies', value: 'Movies' },
	{ label: 'Sports', value: 'Sports' },
	{ label: 'Tech', value: 'Tech' },
	{ label: 'Fashion', value: 'Fashion' },
];

const Filter = () => {
	const { filterCategory, setFilterCategory } = useContext(DataContext);

	const handleChange = (event) => {
		setFilterCategory({ category: event.target.value });
	};

	return (

		<div className='filter-Container'>
			<label className='label'>
				Filter
				<select 
					value={filterCategory.category} 
					onChange={handleChange} 
					className='selectContainer'
				>
					{options.map((option) => (
						<option 
							value={option.value} 
						>
							{option.label}
						</option>
					))}
				</select>

			</label>
		</div>

	);
}

export default Filter