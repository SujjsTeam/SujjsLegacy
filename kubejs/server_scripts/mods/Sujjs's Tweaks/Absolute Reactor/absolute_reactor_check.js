// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.

const REACTOR_ID = 'sujjslegacy:absolute_reactor'
const REACTOR_BLOCK = 'modular_machinery_reborn:controller'
const REACTOR_RANGE = 32
const REACTOR_DEFAULT_COLOR = 0xFFFF4900 | 0

const forEachAbsoluteReactor = (level, pos, action) => {
    let chunkX = pos.x >> 4
    let chunkZ = pos.z >> 4
    let chunk = null
    for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
            chunk = level.getChunk(chunkX + dx, chunkZ + dz)
            chunk.getBlockEntities().forEach((controller, entity) => {
                try {
                    if (String(level.getBlock(controller).id) != REACTOR_BLOCK) return
                    if (String(entity.getId()) != REACTOR_ID) return
                    if (Math.abs(controller.x - pos.x) > REACTOR_RANGE) return
                    if (Math.abs(controller.y - pos.y) > REACTOR_RANGE) return
                    if (Math.abs(controller.z - pos.z) > REACTOR_RANGE) return
                    action(entity, controller)
                } catch (erro) {
                    console.error(`[Absolute Reactor] Erro ao conferir o reator em ${controller}: ${erro}`)
                }
            })
        }
    }
}

const paintReactor = (level, entity, color) => {
    let controller = entity.getBlockPos()
    let blocks = entity.getFoundMachine().getPattern().getBlocks(entity.getFacing())
    blocks.forEach((relative, ingredient) => {
        let part = level.getBlockEntity(controller.offset(relative))
        if (part != null && typeof part.setMachineColor == 'function') {
            part.setMachineColor(color)
        }
    })
}

const recheck = (level, entity, pos, repaint) => {
    let antes = entity.isFormed()
    entity.onBlockStateChanged(pos, level.getBlockState(pos))
    let depois = entity.isFormed()
    if (antes != depois) {
        console.info(`[Absolute Reactor] Reator em ${entity.getBlockPos()} ${depois ? 'formado' : 'desfeito'} (mudança em ${pos})`)
    }
    if (depois && (antes != depois || repaint)) {
        paintReactor(level, entity, entity.getMachineColor())
    } else if (!depois && antes != depois) {
        paintReactor(level, entity, REACTOR_DEFAULT_COLOR)
    }
}

const recheckAfterChange = (server, level, pos, repaint) => {
    server.scheduleInTicks(1, () => {
        forEachAbsoluteReactor(level, pos, entity => recheck(level, entity, pos, repaint))
    })
}

BlockEvents.broken(sujjslegacy => {
    recheckAfterChange(sujjslegacy.server, sujjslegacy.level, sujjslegacy.block.pos, false)
})

BlockEvents.placed(sujjslegacy => {
    recheckAfterChange(sujjslegacy.server, sujjslegacy.level, sujjslegacy.block.pos, true)
})

// © 2026 SujjsTeam — All rights reserved.
// Do not copy, modify, redistribute, or use without permission.
