import { createContext, useState } from "react";

export const DataContext = createContext(null);

const initialCategory = {
	category: 'All',
}


const DataProvider = (props)=>{
	const [userAccount, setUserAccount]= useState({userName: '', name: ''});

	const [filterCategory, setFilterCategory] = useState(initialCategory);


	return (
		<DataContext.Provider value={{ userAccount, setUserAccount, filterCategory, setFilterCategory }}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;