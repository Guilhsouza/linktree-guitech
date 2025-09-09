interface cardBody {
    content: string;
    hrefDestiny: string;
}

import styles from "./styles.module.css"

const CardBtn = (cardBody: cardBody) => {

    return (
        <a href={cardBody.hrefDestiny} target="_blank"
            className={`border-white rounded-xl p-2.5 mt-4 w-full text-center border-2 ${styles.btnStyle}`}>
            {cardBody.content}
        </a>
    )
}

export default CardBtn