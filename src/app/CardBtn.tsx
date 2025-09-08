interface cardBody {
    content: string;
    hrefDestiny: string;
}

const CardBtn = (cardBody: cardBody) => {

    return (
        <a href={cardBody.hrefDestiny} target="_blank"
            className="border-white rounded-xl p-2 mt-4 w-full text-center border-2">
            {cardBody.content}
        </a>
    )
}

export default CardBtn