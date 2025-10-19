<script setup lang="ts">
import { computed, ref } from 'vue'
import { Eye, EyeClosed } from 'lucide-vue-next'
import { LoginCwall, LoginYunmo } from '@/utils/aurh/login.ts'

// 表单信息
const name = ref('')
const password = ref('')

// 是否可见密码
const visiblePassword = ref<boolean>(false)

// 是否再进行操作
const isSigningIn = ref<boolean>(false)

const changePasswordVisible = (e: PointerEvent) => {
    e.preventDefault()
    visiblePassword.value = !visiblePassword.value
}

const submitForm = async () => {
    isSigningIn.value = true

    // 登录 Cwall 和 Yunmo
    const [cwall, yunmo] = await Promise.all([
        LoginCwall(name.value, password.value),
        LoginYunmo(name.value, password.value),
    ])

    if (cwall?.redirected || yunmo?.redirected) {
        alert('登录成功')
    } else {
        alert('登录失败')
    }
    isSigningIn.value = false
}
</script>

<template>
    <div class="background">
        <div class="card-container">
            <div class="title-container">
                <h2 class="title">登录</h2>
            </div>

            <form class="form-container" @submit.prevent="submitForm">
                <div>
                    <label class="label">用户名称</label>
                    <input class="input" placeholder="输入用户名称" v-model="name" />
                </div>

                <div class="password-input">
                    <label class="label">密码</label>
                    <div class="input-with-element">
                        <input
                            class="input"
                            :type="visiblePassword ? 'text' : 'password'"
                            placeholder="密码"
                            v-model="password"
                        />
                        <button @click="changePasswordVisible" class="show-password element">
                            <Eye v-if="!visiblePassword" />
                            <EyeClosed v-else />
                        </button>
                    </div>
                </div>

                <div class="submit-btn-container">
                    <button type="submit" class="submit-btn" :disabled="isSigningIn">
                        {{ isSigningIn ? '登录中...' : '登录' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped lang="less">
@import '@/assets/settings';
@import '@/assets/global';
@import '@/assets/ui/card';

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container {
    .card-width();
    .card-settings();
    background: var(--bg-alt);
    padding: 1.5rem;
    border-radius: 1rem;
    position: relative;

    border: 1px solid var(--border);

    [data-theme='dark'] & {
        border: 1px solid var(--border);
    }
}

.title-container {
    display: flex;
    justify-content: center;
}

.title,
.label {
    color: var(--text);
}

.form-container {
    display: grid;
    gap: 10px;
}

.input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: @input-border solid var(--border);
    border-radius: @input-radius;
    box-sizing: border-box;
    background: var(--bg-alt);
    color: var(--text);
}

// 密码输入框
.password-input {
    width: 100%;
    display: flex;
    flex-direction: column;
}

// 显示密码按钮
.show-password {
    border: none;
    background: none;
    color: inherit;
    cursor: pointer;
    text-decoration: underline;
}

.show-password:hover,
.show-password:active,
.show-password:focus {
    text-decoration: underline;
}

// 提交按钮
.submit-btn-container {
    display: flex;
    width: 100%;
    justify-content: center;
}

.submit-btn {
    padding: 15px 64px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    background-color: var(--primary);
    border: none;
    border-radius: @button-radius;
    color: white;
}
</style>
