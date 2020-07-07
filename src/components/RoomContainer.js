import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../Context';
import Loading from '../components/Loading';


const RoomContainer = (props) => {
    const {loading,sortedRooms,rooms} = props.context;
            if(loading){
                return <Loading/>
            }
            return (
                <div>
                    <RoomFilter rooms={rooms} />
                    <RoomList rooms={sortedRooms} />
                </div>
            );
}

export default withRoomConsumer(RoomContainer);


// const RoomContainer = () => {
//     return(
//     <RoomConsumer>
//         {value => {
//             const {loading,sortedRooms,rooms} = value;
//             if(loading){
//                 return <Loading/>
//             }
//             return (
//                 <div>
//                     <RoomFilter rooms={rooms} />
//                     <RoomList rooms={sortedRooms} />
//                 </div>
//             );
//         }}
//     </RoomConsumer>
//     ); 
// }

// export default RoomContainer;