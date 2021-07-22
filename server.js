//http server using HAPI framework
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  /**Hapi.server(). Method ini menerima satu parameter yakni ServerOptions. ServerOptions merupakan objek yang menampung konfigurasi dari server yang hendak dibuat, salah satunya kita bisa menetapkan properti port dan host. */
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });
  server.route(routes);

  //   server.route({
  //     method: "GET",
  //     path: "/",
  //     handler: (request, h) => {
  //       return "Hello HAPI FrameWork";
  //     },
  //   });
  /**Proses menjalankan server (server.start()) dilakukan secara asynchronous
   * arena itu, kita perlu menjalankannya di dalam fungsi async dan memanggil server.start() menggunakan await.
   */
  await server.start();
  /**melihat alamat lengkap dan port di mana server dijalankan melalui properti server.info.uri.
   */
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
