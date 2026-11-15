// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

ServerEvents.recipes(sujjslegacy => {
    sujjslegacy.remove({
        output: /^create:crushed_raw_.+$/
    })

    sujjslegacy.remove({
        input: /^create:crushed_raw_.+$/
    })
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
