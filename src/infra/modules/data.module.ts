import { PrismaService } from "@infra/data/client/prisma.service";
import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Global()
@Module({
    providers: [PrismaClient, PrismaService],
    exports: [PrismaService]
})

export class DataModule{}