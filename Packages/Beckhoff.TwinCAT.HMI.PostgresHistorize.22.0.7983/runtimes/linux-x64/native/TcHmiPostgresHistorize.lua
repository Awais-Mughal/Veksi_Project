-- TcHmiPostgresHistorize.lua
-- luacheck: globals g_schema g_data TcHmiPostgresHistorize

TcHmiPostgresHistorize = {}
TcHmiPostgresHistorize.__index = TcHmiPostgresHistorize

function TcHmiPostgresHistorize.extend_default_content()
    return true
end

function TcHmiPostgresHistorize.print_css_content(name, query)
    return [[
        <style>
            .reset-btn {
                background-color: blue;
                width: 165px;
            }
        </style>
    ]]
end

function TcHmiPostgresHistorize.print_custom_content(name, query)
    if query and query.Content == "database" then
        return [[
            <input class="reset-btn" type="button" id="reset-db-btn" value="Reset database"/>
        ]]
    end
end

function TcHmiPostgresHistorize.print_script_content(name)
    return [[
        function reset_db() {
            var btn = document.getElementById('reset-db-btn');
            btn.disabled = true;

            if (!confirm("Are you sure you want to reset the database? This action cannot be undone.")) {
                btn.disabled = false;
                return;
            }

            if (typeof WS === "undefined" || !WS.writeSymbol) {
                btn.disabled = false;
                return;
            }

            WS.writeSymbol("]] .. name .. [[.ResetDatabase").finally(function() {
                btn.disabled = false;
            });
        }
        document.addEventListener('DOMContentLoaded', function() {
            var btn = document.getElementById('reset-db-btn');
            if (btn) btn.addEventListener('click', reset_db);
        });
    ]]
end

return TcHmiPostgresHistorize