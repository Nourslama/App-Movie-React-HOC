
import React from 'react';


export default function WithLoading(Component){
  return  function WihLoadingComponent({ isLoading, ...props })
   
    {if (!isLoading) return (<Component {...props} />);
    return (
        <div className="Loading">
             <span> <i class="fa fa-spinner fa-spin"></i>
</span>
               Loading...
        </div>)}}

 