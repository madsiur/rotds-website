function getCellValue($tr, idx) {
        const $cell = $tr.children().eq(idx);
        const val = $cell.data("value");
        return val !== undefined ? val : $.trim($cell.text());
    }

function compareFactory(idx, type, asc) {
    return function (a, b) {
        const $a = $(asc ? a : b);
        const $b = $(asc ? b : a);

        const v1 = getCellValue($a, idx);
        const v2 = getCellValue($b, idx);

        if (type === "number" || type === "seconds") {
            const n1 = parseFloat(v1);
            const n2 = parseFloat(v2);
            return isNaN(n1) || isNaN(n2) ? 0 : n1 - n2;
        } else {
            return String(v1).localeCompare(String(v2));
        }
    };
}

function resetSorting() {
    clearSortIcons();
    const $initialSortTh = $('th[data-sort="id"]');
    if ($initialSortTh.length) {
        const $table = $initialSortTh.closest("table");
        const $tbody = $table.find("tbody");
        const type = $initialSortTh.data("type");
        const idx = $initialSortTh.index();

        const $rows = $tbody.find("tr").get();
        $rows.sort(compareFactory(idx, type, true));
        $.each($rows, (i, row) => $tbody.append(row));

        $initialSortTh.find(".sort-icon").text("↓");
    }
}

function clearSortIcons() {
    $(".sort-icon").text("↕");
}

$(document).ready(function () {
    $("th[data-sort]").each(function () {
        const $th = $(this);
        $th.css("cursor", "pointer");
        let asc = true;

        $th.on("click", function () {
            const $table = $th.closest("table");
            const $tbody = $table.find("tbody");
            const type = $th.data("type");
            const idx = $th.index();

            const $rows = $tbody.find("tr").get();
            $rows.sort(compareFactory(idx, type, asc));
            $.each($rows, (i, row) => $tbody.append(row));

            clearSortIcons();
            $th.find(".sort-icon").text(asc ? "↑" : "↓");
            asc = !asc;
        });
    });
});