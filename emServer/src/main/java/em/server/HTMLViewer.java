package em.server;

import em.server.exceptions.FailedGetTheFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;

public class HTMLViewer {

    private String html = "";

    private HTMLViewer(String htmlPath, Map<String, Object> params) {
        try {
            FileReader fileReader = new FileReader("/"+htmlPath, true);
            String parsedHtml = new String(fileReader.getBytes());

            if(params != null) {
                for(Map.Entry<String, Object> paramEntity : params.entrySet()){
                    int keyIndex = parsedHtml.indexOf("#"+paramEntity.getKey());
                    if(keyIndex > -1){
                        parsedHtml = parsedHtml.replace("#" + paramEntity.getKey(), (String) paramEntity.getValue());
                    }
                }
            }

            this.html = parsedHtml;
        } catch (FailedGetTheFile failedGetTheFile) {
            failedGetTheFile.printStackTrace();
        }
    }

    public String getView(){
        return this.html;
    }

    public static HTMLViewer parse(String htmlPath){
        return new HTMLViewer(htmlPath, null);
    }

    public static HTMLViewer parse(String htmlPath, Map<String, Object> params){
        return new HTMLViewer(htmlPath, params);
    }

}
