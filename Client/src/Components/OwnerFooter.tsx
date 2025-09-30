import { memo } from "react"
import "../Style/OwnerFooter.css"

function OwnerFooter() {
    return (
        <footer className='owner-text bottom-sub-container'>
            All &copy;Copyrights reserved
        </footer>
    )
}

export default memo(OwnerFooter)