import React from 'react';
import {getPageArray} from "../../../utils/page";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPageArray(totalPages)
    return (
        <div className="pagination">
            {pagesArray.map(p =>
                <span key={p}
                      onClick={()=> changePage(p)}
                      className={page === p ? "page current" : 'page'}
                > {p}</span>
            )}
        </div>
    );
};

export default Pagination;