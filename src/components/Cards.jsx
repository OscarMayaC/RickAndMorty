import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   //console.log("cards, caracteres ", props)

   return (<div>
      {
         characters.map((p) => {
            return (
               <Card
                  id={p.id}
                  name={p.name}
                  species={p.species}
                  gender={p.gender}
                  image={p.image}
                  onClose={() => props.onClose(p.id)}
               />
            )
         })
      }
   </div>);
}
