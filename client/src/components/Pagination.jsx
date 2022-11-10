import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/actions/index";
import PaginationS from "./styles/PaginationStyle";

export default function Pagination({ page }){
    var page = useSelector((state)=> state.page);
    const recipes = useSelector((state)=> state.recipes);
    const dispatch = useDispatch();

    function handlerChange(id){
        switch(id){
            case "previous":
                if(page > 1){
                    page--;
                    dispatch(changePage(page));
                }
                break;
            
            case "next":
                if(page < Math.ceil(recipes.length/12)){
                    page++;
                    dispatch(changePage(page));
                }
                break;
        }
    }

    return (
        <PaginationS>
            <div className="previous">
                <span id="previous" onClick={(event)=> handlerChange(event.target.id)}>{"<"}</span>
            </div>

            <div id="page">
                <span>{page}</span>
            </div>

            <div className="next">
                <span id="next" onClick={(event)=> handlerChange(event.target.id)}>{">"}</span>
            </div>
        </PaginationS>
    );
}