(function () {
    $(document).ready(main);

    function main() {

        // Vertical text
        $.each($(".vertical-text"), function (i) {
            //$(this).html($(this).text().replace(/(.)/g, "$1<br />"));

            if (i % 3 === 0) {
                $(this).parent().parent().children()
                    .css("background-color", "#EEE8AA")
                    .css("border-color", "#EEE8AA");
            }
            if (i % 3 === 1) {
                $(this).parent().parent().children()
                    .css("background-color", "#EBEBEB")
                    .css("border-color", "#EBEBEB");
            } else if (i % 3 === 2) {
                $(this).parent().parent().children()
                    .css("background-color", "#ADD8E6")
                    .css("border-color", "#ADD8E6");
            }

        });

        // Write on keyup event of keyword input element
        $("#kwd_search").keyup(function () {
            // When value of the input is not blank

            if ($(this).val() !== "") {
                var jo = $("#my-table td:first-child:contains-ci('" + $(this).val() + "')").parent("tr");

                if (jo.size() !== 0) {
                    $("#my-table tbody>tr").hide();
                    jo.show();
                    jo.parent("tbody").children("tr:first-child").show();
                }
            } else {
                // When there is no input or clean again, show everything back
                $("#my-table tbody>tr").show();
            }
        });

        // jQuery expression for case-insensitive filter
        $.extend($.expr[":"], {
            "contains-ci": function (elem, i, match, array) {
                return (elem.textContent || elem.innerText || $(elem).text() || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });
    }

})();
