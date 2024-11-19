import tvicon from '../../../public/svg/tv.svg'
import wifiicon from '../../../public/svg/wifi.svg'
import kitchenicon from '../../../public/svg/kitchen.svg'
import smokingallowedicon from '../../../public/svg/smokingallowed.svg'
import petsallowedicon from '../../../public/svg/petsallowed.svg'
import cookingbasicsicon from '../../../public/svg/cookingbasics.svg'
import airconditioningicon from '../../../public/svg/air-conditioning-icon.svg'
import bbqgrillicon from '../../../public/svg/bbq-grill-icon.svg'
import beachareaicon from '../../../public/svg/beach-area-icon.svg'
import fireextinguishericon from '../../../public/svg/fire-extinguisher-icon.svg'
import fireplaceicon from '../../../public/svg/fireplace-icon.svg'
import firstaidkiticon from '../../../public/svg/first-aid-kit-icon.svg'
import gymicon from '../../../public/svg/gym-icon.svg'
import hottubicon from '../../../public/svg/hot-tub-icon.svg'
import lakeareaicon from '../../../public/svg/lake-area-icon.svg'
import outdoordiningicon from '../../../public/svg/outdoor-dining-icon.svg'
import paidparkingicon from '../../../public/svg/paid-parking-icon.svg'
import parkingicon from '../../../public/svg/parking-icon.svg'
import patioicon from '../../../public/svg/patio-icon.svg'
import pianoicon from '../../../public/svg/piano-icon.svg'
import poolicon from '../../../public/svg/pool-icon.svg'
import pooltableicon from '../../../public/svg/pool-table-icon.svg'
import showericon from '../../../public/svg/shower-icon.svg'
import skiicon from '../../../public/svg/ski-icon.svg'
import smokealarmicon from '../../../public/svg/smoke-alarm-icon.svg'
import washingmachineicon from '../../../public/svg/washing-machine-icon.svg'
import workspaceicon from '../../../public/svg/workspace-icon.svg'
import dryericon from '../../../public/svg/dryer.svg'
import elevatoricon from '../../../public/svg/elevator.svg'
import essentialsicon from '../../../public/svg/essentials.svg'
import freeicon from '../../../public/svg/free.svg'
import gardenicon from '../../../public/svg/garden.svg'
import hairicon from '../../../public/svg/hair.svg'
import heatingicon from '../../../public/svg/heating.svg'
import ironicon from '../../../public/svg/iron.svg'
import lockboxicon from '../../../public/svg/lockbox.svg'
import mountainicon from '../../../public/svg/mountain.svg'
import privatehottubicon from '../../../public/svg/private-hot-tub.svg'
import shampooicon from '../../../public/svg/shampoo.svg'

export const amenityIcons = {
    TV: tvicon,
    Wifi: wifiicon,
    Kitchen: kitchenicon,
    'Smoking allowed': smokingallowedicon,
    'Pets allowed': petsallowedicon,
    'Cooking basics': cookingbasicsicon,
    'Air conditioning': airconditioningicon,
    'BBQ grill': bbqgrillicon,
    'Beach area': beachareaicon,
    'Fire extinguisher': fireextinguishericon,
    Fireplace: fireplaceicon,
    'First aid kit': firstaidkiticon,
    Gym: gymicon,
    'Hot tub': hottubicon,
    'Lake area': lakeareaicon,
    'Outdoor dining': outdoordiningicon,
    'Paid parking': paidparkingicon,
    Parking: parkingicon,
    Patio: patioicon,
    Piano: pianoicon,
    Pool: poolicon,
    'Pool table': pooltableicon,
    Shower: showericon,
    Ski: skiicon,
    'Smoke alarm': smokealarmicon,
    'Washing machine': washingmachineicon,
    Workspace: workspaceicon,
    Dryer: dryericon,
    Elevator: elevatoricon,
    Essentials: essentialsicon,
    Free: freeicon,
    Garden: gardenicon,
    'Hair dryer': hairicon,
    Heating: heatingicon,
    Iron: ironicon,
    Lockbox: lockboxicon,
    Mountain: mountainicon,
    'Private hot tub': privatehottubicon,
    Shampoo: shampooicon,
}

export function filterAmenities(amenities, amenityIcons) {
    return amenities.filter(amenity => amenityIcons.hasOwnProperty(amenity));
}

export function groupAmenities(amenities, itemsPerRow = 5) {
    const rows = [];
    for (let i = 0; i < amenities.length; i += itemsPerRow) {
        rows.push(amenities.slice(i, i + itemsPerRow));
    }
    return rows;
}