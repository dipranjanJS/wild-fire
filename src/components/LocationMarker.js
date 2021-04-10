import React from 'react';
import {Icon} from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <button className="icon-btn"><Icon icon={locationIcon} className="location-icon" /></button>
        </div>
    )
}

export default LocationMarker
