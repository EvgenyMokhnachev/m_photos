import em.server.HttpServer;

public class Launcher {

    public static void main(String[] args) {
        HttpServer server = new HttpServer(8085);
        server.configuration.setConfigurationFilePath("/server_configuration.xml");
        server.start();
    }

}
