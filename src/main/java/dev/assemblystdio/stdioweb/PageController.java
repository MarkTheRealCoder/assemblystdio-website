package dev.assemblystdio.stdioweb;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping("/")
    public String home(Model model) {
        return "home";
    }

    @GetMapping("/examples")
    public String examples(Model model) {
        return "examples";
    }

    @GetMapping("/download")
    public String download(Model model) {
        return "download";
    }
}
