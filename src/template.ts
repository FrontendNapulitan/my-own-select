export const template =`
        <button
            id="focusButton"
            style="position: fixed; top: 900%;outline: none;"
            }>
        </button>
        <button id="select" part="select" >
            <div id="selectedElement">select a value</div>
            <div id="list" part="itemsContainer">
                <slot></slot>
            </div>
            <slot name="arrowImg">
                <svg
                fill="#000000"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 407.437 407.437"
                xml:space="preserve"
                >
                <polygon
                    points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
                />
                </svg>
            </slot>
        </button>`;