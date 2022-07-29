import React, {useState} from 'react'
import Affairs from './Affairs'
import h from './Affairs.module.css'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type AffairType =
    {
        _id: number,
        name: string,
        priority: string
    }
// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') {
        return affairs
    }
    let filterAffairs: AffairType[] = []
    if (filter === 'low') {
        filterAffairs = affairs.filter(el => el.priority === 'low')
    }
    if (filter === 'high') {
        filterAffairs = affairs.filter(el => el.priority === 'high')
    }
    if (filter === 'middle') {
        filterAffairs = affairs.filter(el => el.priority === 'middle')
    }
    return filterAffairs ? filterAffairs : []
}


export const deleteAffair = (affairs: AffairType[], _id: number): any => { // need to fix any
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div className={h.home}>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

        </div>
    )
}

export default HW2
