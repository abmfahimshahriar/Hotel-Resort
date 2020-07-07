import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';

//get unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

const RoomFilter = (props) => {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;

    let types = getUnique(props.rooms,'type');
    types = ['all',...types];
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });

    let people = getUnique(props.rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>;
    });
    return (
        <section>
            <Title title="search rooms" />
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">Room type</label>
                <select 
                name="type" 
                id="type" 
                value={type} 
                className="form-control" 
                onChange={handleChange}
                >
                {types}
                </select>
                </div>
                {/* end select type */}
                {/* select guests */}
                <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select 
                name="capacity" 
                id="capacity" 
                value={capacity} 
                className="form-control" 
                onChange={handleChange}
                >
                {people}
                </select>
                </div>
                {/* end select type */}
                {/* select price */}
                <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input 
                type= "range"
                name="price" 
                id="price" 
                value={price} 
                className="form-control" 
                onChange={handleChange}
                max={maxPrice}
                min={minPrice}
                />
                </div>
                {/* end select price */}
                {/* select size */}
                <div className="form-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                <input 
                type= "number"
                name="minSize" 
                id="size" 
                value={minSize} 
                className="size-input" 
                onChange={handleChange}
                />
                <input 
                type= "number"
                name="maxSize" 
                id="size" 
                value={maxSize} 
                className="size-input" 
                onChange={handleChange}
                />
                </div>
                </div>
                {/* end select size */}
                {/* select extras */}
                <div className="form-group">
                <div className="single-extra">
                <input 
                type= "checkbox"
                name="breakfast" 
                id="breakfast" 
                checked={breakfast}
                onChange={handleChange}
                />
                <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                <input 
                type= "checkbox"
                name="pets" 
                id="pets" 
                checked={pets}
                onChange={handleChange}
                />
                <label htmlFor="pets">pets</label>
                </div>
                </div>
                {/* end select price */}
            </form>
        </section>
    )
}

export default RoomFilter;
