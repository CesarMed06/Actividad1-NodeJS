//Importo los módulos que voy a usar:

import axios from "axios";     //Módulo para hacer peticiones HTTP
import moment from "moment";   //Módulo para manejar y formatear fechas
import chalk from "chalk";     //Módulo para colorear texto en consola

//Defino la función:

    async function mostrarChiste() {

    //Uso un "try" para manejar errores:

        try {

            //Petición a la API (mediante el módulo axios):

            const response = await axios.get("https://api.chucknorris.io/jokes/random");

            //Formateo la fecha (con el módulo moment):

            const fecha = moment().format("YYYY-MM-DD HH:mm:ss")

            //Lo imprimo por pantalla con colores (con el módulo chalk):

            console.log(chalk.blue("Fecha:"), chalk.green(fecha));
            console.log(chalk.yellow("Chiste:"), response.data.value);

//En caso de que haya error, lo imprimo con un mensaje en rojo (con el módulo chalk):

} catch (err) {

    console.log(chalk.red("Error al obtener el chiste."));

}
}

//Llamo a la función:

mostrarChiste();