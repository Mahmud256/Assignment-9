import React from 'react';

const InstructorsCard = ({sir}) => {
    const { id, name, pic_url } = sir || {};
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure>
                    <img className='h-40 w-72' src={pic_url} alt="" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {name}
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default InstructorsCard;