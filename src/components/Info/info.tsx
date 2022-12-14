import { Gentleman } from '../Gentelman/Gentlman';

export function Info(props: any) {
    const renderGentlemen = props.data.map((gentleman: any) => (
        <Gentleman
            id={gentleman.id}
            name={gentleman.name}
            status={gentleman.status}
            profession={gentleman.profession}
            twitter={gentleman.twitter}
            picture={gentleman.picture}
            alternativeText={gentleman.alternativeText}
            selected={gentleman.selected}
            key={gentleman.id}
            data={props.data}
            setData={props.setData}
        />
    ));

    return (
        <>
            <ul className="gentlemen">{renderGentlemen}</ul>
        </>
    );
}
