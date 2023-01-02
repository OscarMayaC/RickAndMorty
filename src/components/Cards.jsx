import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   //console.log("cards, caracteres ", props)

   return (<div>
      {
         characters.map((p) => {
            return (
               <Card
                  name={p.name}
                  species={p.species}
                  gender={p.gender}
                  image={p.image}
                  onClose={() => window.alert('Emulamos que se cierra la card')}
               />
            )
         })
      }
   </div>);
}
