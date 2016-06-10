package em.server.enums;

public enum WebSocketVersion {

    ws13("13");

    public String ver;
    WebSocketVersion(String ver){
        this.ver = ver;
    }

    public static WebSocketVersion valueOfString(String data) {
        WebSocketVersion result = null;
        WebSocketVersion[] values = WebSocketVersion.values();
        for(WebSocketVersion webSocketVersion : values){
            if(webSocketVersion.ver.equals(data)){
                result = webSocketVersion;
                break;
            }
        }

        if(result == null){
            System.out.println(" ");
            System.out.println("Unknown WebSoket version: " + data);
            System.out.println(" ");
        }

        return result;
    }

}
