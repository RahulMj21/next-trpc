import { procedure, router } from "@/server/initTrpc";

export const radha = router({
    shyam: procedure.query(() => "RadheShyam❤️RadheShyam"),
    kanhaiya: procedure.mutation(() => ({
        success: true,
        message: "RadheShyam❤️RadheShyam",
    })),
});
