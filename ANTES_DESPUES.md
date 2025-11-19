# 📝 Ejemplos Antes/Después - Refactorización SOLID

## 1️⃣ Sidebar.jsx - Simplificación de Estado

### ❌ ANTES (Antipatrón)
```javascript
const Sidebar = () => {
    // 5 useState diferentes - Violación de S.O.L.I.D
    const [game, setGame] = useState()
    const [home, setHome] = useState()
    const [about, setAbout] = useState()
    const [skills, setSkills] = useState()
    const [contact, setContact] = useState()

    return (
        <>
            <div className="nav-bar">
                <nav>
                    {/* Hardcoding de rutas y lógica repetida */}
                    <NavLink to="/gamification"
                        onClick={() => setGame("Game")}>
                        <FontAwesomeIcon icon={faGamepad} color="#4d4d4e" />
                        <Logro page={game} />
                    </NavLink>
                    <NavLink to="/"
                        onClick={() => setHome("Home")}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                        <Logro page={home} />
                    </NavLink>
                    {/* ... 3 veces más */}
                </nav>
```

**Problemas:**
- 5 useState para la misma funcionalidad
- Hardcoding de rutas
- Repetición de lógica
- Difícil de mantener
- Difícil de extender

### ✅ DESPUÉS (SOLID)
```javascript
import { NAVIGATION_ITEMS, ROUTES } from '../../constants/routes'

const Sidebar = () => {
    // 1 useState - Claridad y SRP
    const [activePage, setActivePage] = useState(null)

    return (
        <>
            <div className="nav-bar">
                <nav>
                    {/* Mapeado desde constante - DRY Principle */}
                    {NAVIGATION_ITEMS.map((item) => (
                        <NavLink
                            key={item.key}
                            to={item.path}
                            onClick={() => setActivePage(item.key)}
                        >
                            <FontAwesomeIcon icon={ICON_MAP[item.icon]} />
                            <Logro page={activePage === item.key ? item.key : null} />
                        </NavLink>
                    ))}
                </nav>
```

**Beneficios:**
- ✅ 1 único useState - SRP
- ✅ Rutas desde constantes
- ✅ Mapeado dinámico - DRY
- ✅ Fácil de mantener
- ✅ Fácil de extender (agregar item a NAVIGATION_ITEMS)

**Reducción:** 75 líneas → 45 líneas (-40%)

---

## 2️⃣ SoundBar.jsx - Uso de Custom Hooks

### ❌ ANTES (Lógica en Componente)
```javascript
export default function SoundBar() {
    const ref = useRef(null)
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
        if (!click) {
            ref.current.play()
        } else {
            ref.current.pause()
        }
    }
    
    return (
        <div className='soundBar'>
            <div onClick={() => handleClick()}>
                <div className='play'>
                    <div className='jukebox'></div>
                </div>
            </div>
            <audio src={music2} ref={ref} loop />
        </div>
    )
}
```

**Problemas:**
- Lógica de audio en componente
- Difícil de reutilizar
- Difícil de testear
- No es responsabilidad del componente

### ✅ DESPUÉS (Hook Reutilizable)
```javascript
import { useAudioPlayer } from '../../hooks/useAudioPlayer'

const SoundBar = () => {
    // Lógica extraída a hook - SRP
    const { audioRef, isPlaying, togglePlayPause } = useAudioPlayer(music)

    return (
        <div className="soundBar">
            <div 
                onClick={() => togglePlayPause()} 
                role="button" 
                tabIndex={0}
            >
                <div className="play">
                    <div className="jukebox"></div>
                </div>
            </div>
            <audio src={music} ref={audioRef} loop />
        </div>
    )
}
```

**Beneficios:**
- ✅ Lógica en hook reutilizable
- ✅ Componente presentacional puro
- ✅ Fácil de testear
- ✅ Responsabilidad clara
- ✅ El hook puede usarse en otros lugares

---

## 3️⃣ logro.jsx - Servicios vs Lógica Inline

### ❌ ANTES (Lógica Directa en LocalStorage)
```javascript
export default function Logro(props) {
    const logro = () => toast('🏆 Logro desbloqueado!', { ... })

    // Múltiples queries de localStorage - Violación de SRP
    const logroGame = localStorage.getItem('LogroGame')
    const logroHome = localStorage.getItem('LogroHome')
    const logroAbout = localStorage.getItem('LogroAbout')
    const logroSkills = localStorage.getItem('LogroSkills')
    const logroContact = localStorage.getItem('LogroContact')
    const logroMusic = localStorage.getItem('LogroMusic')

    const page = props.page;

    useEffect(() => {
        // Lógica condicional repetida - Violación de DRY
        if (page == "Game" && logroGame === null) {
            localStorage.setItem('LogroGame', JSON.stringify(page))
            return (logro)
        }

        if (page === "Home" && logroHome === null) {
            localStorage.setItem('LogroHome', JSON.stringify(page))
            return (logro)
        }

        if (page === "About" && logroAbout == null) {
            localStorage.setItem('LogroAbout', JSON.stringify(page))
            return (console.log()+logro) // ❌ BUG: console.log() devuelve undefined
        }

        if (page === "Skills" && logroSkills == null) {
            localStorage.setItem('LogroSkills', JSON.stringify(page))
            return (logro)
        }

        if (logroContact == null && page === "Contact") {
            localStorage.setItem('LogroContact', JSON.stringify(page))
            return (logro)
        }
    }, [page])

    return (<></>)
}
```

**Problemas:**
- 50+ líneas de código
- Acceso directo a localStorage (difícil de testear)
- Repetición de lógica condicional
- BUG: Uso de `console.log()+logro`
- Comparación mixta (== y ===)
- Difícil de mantener

### ✅ DESPUÉS (Servicio Dedicado)
```javascript
import AchievementService from '../../../services/AchievementService'
import { TOAST_CONFIG } from '../../../constants/achievements'

const Achievement = (props) => {
    const showAchievementToast = () => {
        toast('🏆 Logro desbloqueado!', TOAST_CONFIG)
    }

    const page = props.page

    // Lógica clara y concisa - SRP
    useEffect(() => {
        // unlock() devuelve true solo si se desbloqueó ahora
        if (page && AchievementService.unlock(page)) {
            showAchievementToast()
        }
    }, [page])

    return <></>
}
```

**Beneficios:**
- ✅ Solo ~15 líneas (de 50+)
- ✅ Lógica abstraída en servicio - SRP
- ✅ Fácil de testear (mockear AchievementService)
- ✅ Sin duplicación - DRY
- ✅ Bug removido
- ✅ Código limpio y legible

**Reducción:** 50+ líneas → ~15 líneas (-70%)

---

## 4️⃣ Gamification.jsx - Datos Centralizados

### ❌ ANTES (Importar Archivo Externo)
```javascript
import achievements from './Achievement/infoLogros'  // Archivo separado
import AchievementCard from './Achievement/logroCard'

export default function Gamification() {
    const resetAchievements = () => {
        // Hardcoding de keys - Violación de DRY
        const achievementKeys = [
            'LogroGame', 'LogroHome', 'LogroAbout',
            'LogroSkills', 'LogroContact', 'LogroMusic'
        ];
        achievementKeys.forEach(key => localStorage.removeItem(key));
        window.location.reload();
    };

    return (
        <>
            <div className="container home-page">
                {/* ... */}
                <div className="achievement-grid">
                    {achievements.map((ach) => {
                        // Lógica de desbloqueo en componente - Violación de SRP
                        const unlocked = localStorage.getItem(ach.id) !== null;
                        return (
                            <AchievementCard
                                key={ach.id}
                                achievement={ach}
                                unlocked={unlocked}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
```

**Problemas:**
- Importar de múltiples archivos
- Hardcoding de keys
- Acceso directo a localStorage en componente
- Lógica de negocio en componente

### ✅ DESPUÉS (Constantes + Servicios)
```javascript
import { ACHIEVEMENTS_DATA } from '../../constants/achievements'
import AchievementCard from './Achievement/logroCard'
import AchievementService from '../../services/AchievementService'

const Gamification = () => {
    // Lógica extraída a servicio - SRP
    const resetAchievements = () => {
        AchievementService.resetAll()
        window.location.reload()
    }

    return (
        <>
            <div className="container home-page">
                {/* ... */}
                <div className="achievement-grid">
                    {/* Usar constante centralizada - DRY */}
                    {ACHIEVEMENTS_DATA.map((ach) => (
                        <AchievementCard
                            key={ach.id}
                            achievement={ach}
                            unlocked={AchievementService.isUnlocked(ach.id)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
```

**Beneficios:**
- ✅ Constante centralizada
- ✅ Servicio para lógica de logros - SRP
- ✅ Componente presentacional - SRP
- ✅ Fácil de extender (agregar logro a ACHIEVEMENTS_DATA)
- ✅ Fácil de mantener

---

## 5️⃣ Background.jsx - Mapeo Dinámico

### ❌ ANTES (Hardcoding Repetido)
```javascript
export default function Inicio() {
    return (
        <>
            <Sidebar />
            <div className="page">
                <span className="top-tag">Portafolio personal</span>
                <Outlet />
                {/* 12 elementos idénticos - Violación de DRY */}
                <ul className="cuadros">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>                    
                </ul>
            </div>
        </>
    )
}
```

**Problemas:**
- 12 elementos hardcodeados
- Difícil de cambiar cantidad
- Difícil de leer
- Violación de DRY

### ✅ DESPUÉS (Mapeo Dinámico)
```javascript
const Background = () => {
    // Generar array dinámicamente - DRY
    const DECORATIVE_BOXES = Array.from({ length: 12 }, (_, i) => i)

    return (
        <>
            <Sidebar />
            <div className="page">
                <span className="top-tag">Portafolio personal</span>
                <Outlet />
                {/* Mapeo dinámico - Fácil de cambiar */}
                <ul className="cuadros">
                    {DECORATIVE_BOXES.map((_, index) => (
                        <li key={index}></li>
                    ))}
                </ul>
            </div>
        </>
    )
}
```

**Beneficios:**
- ✅ Dinámico y fácil de mantener
- ✅ Cambiar cantidad: Solo cambiar `length: 12`
- ✅ Código limpio - DRY
- ✅ Mejora legibilidad

---

## 6️⃣ Contact.jsx - Constantes Centralizadas

### ❌ ANTES (Hardcoding de Datos)
```javascript
export default function Contact() {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone-contact">
                    <h1>Punto de Control</h1>
                    <p>Conectemos...</p>
                    <div className="text-zone-data">
                        <label>Correo: </label>
                        {/* Hardcoding - Violación de DRY */}
                        <p>sebastian.giraldo.garcia19@gmail.com</p>
                        
                        <label>Número: </label>
                        {/* Hardcoding - Violación de DRY */}
                        <p>+57 3166964330</p>
                    </div>
                </div>
            </div>
        </>
    )
}
```

**Problemas:**
- Datos hardcodeados
- Difícil de mantener si cambia
- Repetido en múltiples lugares
- Violación de DRY

### ✅ DESPUÉS (Constantes Centralizadas)
```javascript
import { CONTACT_INFO } from '../../constants/socialLinks'

const Contact = () => {
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone-contact">
                    <h1>Punto de Control</h1>
                    <p>Conectemos...</p>
                    <div className="text-zone-data">
                        <label>Correo: </label>
                        {/* Usar constante - DRY */}
                        <p>{CONTACT_INFO.email}</p>
                        
                        <label>Número: </label>
                        {/* Usar constante - DRY */}
                        <p>{CONTACT_INFO.phone}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// En /constants/socialLinks.js
export const CONTACT_INFO = {
    email: 'sebastian.giraldo.garcia19@gmail.com',
    phone: '+57 3166964330',
}
```

**Beneficios:**
- ✅ Datos centralizados
- ✅ Fácil de actualizar (un solo lugar)
- ✅ Sin duplicación - DRY
- ✅ Más legible

---

## 7️⃣ ChatBot.jsx - Custom Hook

### ❌ ANTES (Estado Manual)
```javascript
const Chatbot = () => {
    // Estado manual de modal
    const [isOpen, setIsOpen] = useState(false)

    const toggleChatbot = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button className="chatbot-toggle-button" onClick={toggleChatbot}>
                🤖
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <iframe src="..." title="Copilot Chatbot" />
                </div>
            )}
        </>
    )
}
```

### ✅ DESPUÉS (Custom Hook)
```javascript
import { useModal } from '../../hooks/useModal'

const Chatbot = () => {
    // Hook reutilizable
    const { isOpen, toggle } = useModal(false)

    return (
        <>
            <button 
                className="chatbot-toggle-button" 
                onClick={toggle}
                aria-label="Toggle chatbot"
                aria-expanded={isOpen}
            >
                🤖
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <iframe src="..." title="Copilot Chatbot" />
                </div>
            )}
        </>
    )
}
```

**Beneficios:**
- ✅ Hook reutilizable en otros componentes
- ✅ Lógica centralizada
- ✅ Mejor accesibilidad
- ✅ Menos código repetido

---

## 📊 Resumen de Cambios

| Componente | Tipo de Cambio | Beneficio |
|----------|----------------|----------|
| `Sidebar.jsx` | Reducción de estado | -40% líneas, -80% useState |
| `SoundBar.jsx` | Hook reutilizable | Testeable, reutilizable |
| `logro.jsx` | Servicio dedicado | -70% líneas, SRP |
| `Gamification.jsx` | Centralización | Fácil de mantener |
| `Background.jsx` | Mapeo dinámico | DRY, flexible |
| `Contact.jsx` | Constantes | Centralizado, mantenible |
| `ChatBot.jsx` | Custom hook | Reutilizable, accesible |

---

## 🎯 Conclusión

Los cambios implementados demuestran cómo:
- ✅ SOLID Principles mejoran la calidad del código
- ✅ Centralización de datos reduce duplicación
- ✅ Custom hooks reutilizan lógica
- ✅ Servicios abstraen complejidad
- ✅ Componentes se vuelven más limpios
- ✅ Todo es más fácil de mantener y extender

